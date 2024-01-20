import AccountForm from "./accounts/account-form";
import AccountList from "./accounts/account-list";

function AdminHome() {
  return (
    <div>
      <AccountForm />

      <AccountList />
    </div>
  );
}

export default AdminHome;
