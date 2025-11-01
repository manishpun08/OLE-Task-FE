import { AccountSecurity } from "./AccountSecurity";
import { AccountStats } from "./AccountStats";
import { RecentActivity } from "./RecentActivity";

export const ProfileSidebar = () => (
  <div className="space-y-6">
    <AccountSecurity />
    <RecentActivity />
    <AccountStats />
  </div>
);
