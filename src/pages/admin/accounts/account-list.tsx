import { getAccounts } from "@/services/api/admin";
import { useQuery } from "@tanstack/react-query";

function AccountList() {
  const { data } = useQuery({
    queryKey: ["account-list"],
    queryFn: getAccounts,
  });

  return (
    <div>
      <h1 className="text-lg font-bold">Account List</h1>
      {data &&
        data.map((account) => <p key={account.id}>{account.username}</p>)}
    </div>
  );
}

export default AccountList;
