"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

import { useActionState } from "react";
import { addScheduleAction } from "@/data/actions/schedule-actions";

import { SubmitButton } from "@/components/custom/submit-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { StrapiErrors } from "@/components/custom/strapi-errors";

const INITIAL_STATE = {
  data: null,
  strapiErrors: null,
  message: null,
};

// Define the ScheduleFormProps interface
interface ScheduleFormProps {
  name: string;
  live: string;
  class_time: Date;
  description: string;
}

export function AddScheduleForm({
  className,
}: {
  readonly className?: string;
}) {
  const [formState, formAction] = useActionState(addScheduleAction, INITIAL_STATE);

  // State for form fields
  const [formData, setFormData] = useState<ScheduleFormProps>({

    name: "",
    live: "",
    class_time: new Date(),
    description: ""
  });

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className={cn("space-y-6 p-6 bg-white rounded-lg shadow-md max-w-5xl w-[90%] mx-auto mt-5", className)} action={formAction}>
  <div className="space-y-4 grid">
    {/* Schedule Name and Duration */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-semibold">Schedule Name</label>
        <Input
          id="name"
          name="name"
          placeholder="Schedule Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        />
      </div>
      <div className="space-y-2">
  <label htmlFor="class_time" className="text-sm font-semibold">Class Date & Time</label>
  <Input
    id="class_time"
    name="class_time"
    type="datetime-local"
    placeholder="Select class date and time"
    value={formData.class_time.toISOString().slice(0, 16)} // Format to "YYYY-MM-DDTHH:mm"
    onChange={(e) => {
      const { value } = e.target; // value is in "YYYY-MM-DDTHH:mm" format
      setFormData((prev) => ({
        ...prev,
        class_time: new Date(value), // Convert the input value to a Date object
      }));
    }}
    className="w-full p-3 border rounded-md"
    required
  />
</div>

    </div>

    {/* Details */}
    <div className="space-y-2">
      <label htmlFor="details" className="text-sm font-semibold">Details</label>
      <Textarea
        id="details"
        name="details"
        placeholder="Add details"
        value={formData.description}
        onChange={handleChange}
        className="w-full p-3 border rounded-md resize-none"
        required
      />
    </div>

    

  </div>

  <div className="flex justify-end">
    <SubmitButton text="Add Schedule" loadingText="Saving Schedule" />
  </div>

  <StrapiErrors error={formState?.strapiErrors} />
</form>


  

  );
}
