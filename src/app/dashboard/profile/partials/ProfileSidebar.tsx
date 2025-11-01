import { AccountSecurity } from "./AccountSecurity";
import { RecentActivity } from "./RecentActivity";
import { AccountStats } from "./AccountStats";

export const ProfileSidebar = () => (
  <div className="space-y-6">
    <AccountSecurity />
    <RecentActivity />
    <AccountStats />
  </div>
);
