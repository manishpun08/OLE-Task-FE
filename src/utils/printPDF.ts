// Alternative PDF generation using browser's print functionality
export const generatePDFWithPrint = (
  element: HTMLElement,
  filename: string = "resume.pdf",
): void => {
  // Create a new window with just the resume content
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    throw new Error("Pop-up blocked. Please allow pop-ups for this site.");
  }

  // Get the computed styles from the parent document
  const styles = Array.from(document.styleSheets)
    .map((styleSheet) => {
      try {
        return Array.from(styleSheet.cssRules)
          .map((rule) => rule.cssText)
          .join("\n");
      } catch {
        console.warn(
          "Could not read CSS rules from stylesheet",
          styleSheet.href,
        );
        return "";
      }
    })
    .join("\n");

  // Create the print document
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${filename}</title>
        <style>
          ${styles}
          @media print {
            html, body { 
              margin: 0; 
              padding: 0; 
              background: white;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .resume-content {
              padding: 20px;
              margin: 0;
            }
          }
          @page { 
            size: A4; 
            margin: 0;
            /* Complete removal of headers and footers */
            @top-left-corner { content: ""; }
            @top-left { content: ""; }
            @top-center { content: ""; }
            @top-right { content: ""; } 
            @top-right-corner { content: ""; }
            @bottom-left-corner { content: ""; }
            @bottom-left { content: ""; }
            @bottom-center { content: ""; }
            @bottom-right { content: ""; }
            @bottom-right-corner { content: ""; }
          }
          /* Chrome-specific fix for headers/footers */
          @media print and (-webkit-min-device-pixel-ratio: 0) {
            @page { margin: 0; }
            html, body { margin: 0; padding: 0; }
          }
        </style>
      </head>
      <body>
        <div class="resume-content">
          ${element.outerHTML}
        </div>
      </body>
    </html>
  `);

  printWindow.document.close();

  // Wait for content to load then print
  printWindow.onload = () => {
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  };
};
