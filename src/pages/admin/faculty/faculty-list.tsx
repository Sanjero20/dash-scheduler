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
    <ScrollArea className="h-full w-full">
      <h1 className="text-xl font-bold">Faculty List</h1>

      <hr />

      <div className="h-full w-full">
        {data &&
          data.map((account) => (
            <div
              key={account.id}
              className="flex items-center justify-between rounded p-2 hover:bg-slate-200"
            >
              <p className="col-span-8 text-lg">{account.name}</p>

              <section className="flex gap-2">
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
              </section>
            </div>
          ))}
      </div>
    </ScrollArea>
  );
}

export default FacultyList;
