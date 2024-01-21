import { Card } from "@/components/ui/card";
import AccountForm from "./accounts/account-form";
import AccountList from "./accounts/account-list";
import FacultyForm from "./faculty/faculty-form";
import FacultyList from "./faculty/faculty-list";

function AdminHome() {
  return (
    <div className="flex h-full flex-grow gap-4">
      <Card className="w-1/2 p-2">
        {/* <AccountForm /> */}
        <AccountList />
      </Card>

      <Card className="w-1/2 p-2">
        {/* <FacultyForm /> */}
        <FacultyList />
      </Card>
    </div>
  );
}

export default AdminHome;
