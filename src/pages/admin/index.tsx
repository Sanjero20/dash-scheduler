import { Card } from "@/components/ui/card";
import AccountForm from "./accounts/account-form";
import AccountList from "./accounts/account-list";
import FacultyForm from "./faculty/faculty-form";
import FacultyList from "./faculty/faculty-list";
import FormDetails from "./faculty/form-details-form";
import UploadFacultyForm from "./faculty/upload-faculty-form";

function AdminHome() {
  return (
    <div className="flex h-full gap-4">
      <Card className="flex w-1/2 flex-col gap-2 overflow-hidden p-2">
        <FormDetails />
        <AccountForm />
        <AccountList />
      </Card>

      <Card className="flex h-full w-1/2 flex-col gap-2 overflow-hidden p-2">
        <UploadFacultyForm />
        <FacultyForm />
        <FacultyList />
      </Card>
    </div>
  );
}

export default AdminHome;
