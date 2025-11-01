"use client";

import { X } from "lucide-react";
import type { User } from "../interface/user.interface";

interface UserDetailModalProps {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}

const UserDetailModal: React.FC<UserDetailModalProps> = ({
  user,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <button
          type="button"
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              onClose();
            }
          }}
          aria-label="Close modal"
        />

        {/* Modal panel */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          {/* Header */}
          <div className="bg-white px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">
                User Details
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white px-6 py-6">
            <div className="space-y-6">
              {/* Personal Information */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">
                  Personal Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Full Name
                    </div>
                    <p className="mt-1 text-sm text-gray-900">{user.name}</p>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Username
                    </div>
                    <p className="mt-1 text-sm text-gray-900">
                      @{user.username}
                    </p>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </div>
                    <p className="mt-1 text-sm text-gray-900">{user.email}</p>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Phone
                    </div>
                    <p className="mt-1 text-sm text-gray-900">{user.phone}</p>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Website
                    </div>
                    <p className="mt-1 text-sm text-blue-600">
                      <a
                        href={`http://${user.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {user.website}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">
                  Address Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Street
                    </div>
                    <p className="mt-1 text-sm text-gray-900">
                      {user.address.street}, {user.address.suite}
                    </p>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      City
                    </div>
                    <p className="mt-1 text-sm text-gray-900">
                      {user.address.city}
                    </p>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Zipcode
                    </div>
                    <p className="mt-1 text-sm text-gray-900">
                      {user.address.zipcode}
                    </p>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Coordinates
                    </div>
                    <p className="mt-1 text-sm text-gray-900">
                      {user.address.geo.lat}, {user.address.geo.lng}
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">
                  Company Information
                </h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company Name
                    </div>
                    <p className="mt-1 text-sm text-gray-900">
                      {user.company.name}
                    </p>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Catch Phrase
                    </div>
                    <p className="mt-1 text-sm text-gray-900">
                      {user.company.catchPhrase}
                    </p>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Business
                    </div>
                    <p className="mt-1 text-sm text-gray-900">
                      {user.company.bs}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailModal;
