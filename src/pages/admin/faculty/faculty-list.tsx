import { Trash, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteFaculty, getFaculties } from "@/services/api/faculty";
import { queryClient } from "@/App";
import { ScrollArea } from "@/components/ui/scroll-area";

function FacultyList() {
  const { toast } = useToast();

  const { data } = useQuery({
    queryKey: ["faculty-list"],
    queryFn: getFaculties,
  });

  const mutation = useMutation({
    mutationFn: deleteFaculty,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["faculty-list"] });
      toast({
        description: "Faculty successfully deleted.",
      });
    },
  });

  return (
    // <div className="flex h-full flex-col gap-2">>?
    <>
      <h1 className="text-xl font-bold">Faculty List</h1>

      <hr />

      <ScrollArea className="flex-1">
        {data &&
          data.map((account) => (
            <div
              key={account.id}
              className="grid grid-cols-10 gap-2 rounded p-2 hover:bg-slate-200"
            >
              <p className="col-span-8 text-lg">{account.name}</p>
              <Button
                variant={"destructive"}
                onClick={() => mutation.mutate(account.initials)}
                className="col-span-1"
              >
                <Trash />
              </Button>
              <Button
                className="col-span-1"
                variant={"default"}
                onClick={() => {}}
              >
                <Edit />
              </Button>
            </div>
          ))}
      </ScrollArea>
    </>
    // </div>
  );
}

export default FacultyList;
