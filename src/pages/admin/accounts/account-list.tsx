import { getAccounts } from "@/services/api/admin";
import { useQuery } from "@tanstack/react-query";
import { DeleteUser } from "@/components/button-delete";

function AccountList() {
  const { data } = useQuery({
    queryKey: ["account-list"],
    queryFn: getAccounts,
  });

  return (
    <div>
      <h1 className="text-lg font-bold">Account List</h1>
      {data &&
        data.map((account) => (
          <>
            <div>
              {account.username}
              <DeleteUser id={account.id} />
            </div>
          </>
        ))}
    </div>
  );
}

export default AccountList;
