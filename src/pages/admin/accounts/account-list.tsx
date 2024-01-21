import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteAccount, getAccounts } from "@/services/api/admin";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { queryClient } from "@/App";

function AccountList() {
  const { toast } = useToast();

  const { data } = useQuery({
    queryKey: ["account-list"],
    queryFn: getAccounts,
  });

  const mutation = useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["account-list"] });
      toast({
        variant: "success",
        description: "Account successfully deleted.",
      });
    },
  });

  return (
    <div className="flex h-full flex-grow flex-col gap-2">
      <div>
        <h1 className="text-xl font-bold">Account List</h1>
        {/* Button add new account pop up modal */}
      </div>

      <hr />

      {data &&
        data.map((account) => (
          <div
            key={account.id}
            className="flex items-center justify-between rounded p-2 hover:bg-slate-200"
          >
            <p className="text-lg">{account.username}</p>

            <Button
              variant={"destructive"}
              onClick={() => mutation.mutate(account.id)}
            >
              <Trash />
            </Button>
          </div>
        ))}
    </div>
  );
}

export default AccountList;
