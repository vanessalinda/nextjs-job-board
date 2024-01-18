import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
async function filterJobs(formData: FormData) {
  "use server";
}

const JobFilterSidebar = () => {
  return (
    <aside className="sticky top-0 h-fit rounded-lg border bg-background md:w-[260px]">
      <form action={filterJobs}>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="q">Search</Label>
            <Input id="id" name="q" placeholder="Title, company, etc" />
          </div>
        </div>
      </form>
    </aside>
  );
};

export default JobFilterSidebar;
