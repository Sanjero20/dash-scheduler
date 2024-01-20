import AccountForm from "./accounts/account-form";
import AccountList from "./accounts/account-list";
import FacultyForm from "./faculty/faculty-form";
import FacultyList from "./faculty/faculty-list";

function AdminHome() {
  return (
    <div className="flex gap-2">
      <div className="w-1/2">
        <AccountForm />
        <AccountList />
      </div>

      <div>
        <FacultyForm />
        <FacultyList />
      </div>
    </div>
  );
}

export default AdminHome;
