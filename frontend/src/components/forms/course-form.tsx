"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

import { useActionState } from "react";
import { addCourseAction } from "@/data/actions/course-actions";

import { SubmitButton } from "@/components/custom/submit-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { StrapiErrors } from "@/components/custom/strapi-errors";

const INITIAL_STATE = {
  data: null,
  strapiErrors: null,
  message: null,
};

// Define the CourseFormProps interface
interface CourseFormProps {
  id: string;
  name: string;
  duration: number;
  details: string;
  fee: number;
  class: number;
  available: string; // Keep available as string
}

export function AddCourseForm({
  className,
}: {
  readonly className?: string;
}) {
  const [formState, formAction] = useActionState(addCourseAction, INITIAL_STATE);

  // State for form fields
  const [formData, setFormData] = useState<CourseFormProps>({
    id: "", // Empty initial value
    name: "",
    duration: 0,
    details: "",
    fee: 0,
    class: 0,
    available: "true", // Default value for availability as a string
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
    {/* Course Name and Duration */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-semibold">Course Name</label>
        <Input
          id="name"
          name="name"
          placeholder="Course Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="duration" className="text-sm font-semibold">Duration (hours)</label>
        <Input
          id="duration"
          name="duration"
          type="number"
          placeholder="Duration (hours)"
          value={formData.duration}
          onChange={handleChange}
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
        value={formData.details}
        onChange={handleChange}
        className="w-full p-3 border rounded-md resize-none"
        required
      />
    </div>

    {/* Class Size and Fee */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <label htmlFor="class" className="text-sm font-semibold">Class Size</label>
        <Input
          id="class"
          name="class"
          type="number"
          placeholder="Class Size"
          value={formData.class}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="fee" className="text-sm font-semibold">Fee</label>
        <Input
          id="fee"
          name="fee"
          type="number"
          placeholder="Fee"
          value={formData.fee}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        />
      </div>
    </div>

    {/* Availability */}
    <div className="space-y-2">
      <label htmlFor="available" className="text-sm font-semibold">Available</label>
      <select
        id="available"
        name="available"
        value={formData.available}
        onChange={handleChange}
        className="w-full p-3 border rounded-md"
      >
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
    </div>
  </div>

  <div className="flex justify-end">
    <SubmitButton text="Add Course" loadingText="Saving Course" />
  </div>

  <StrapiErrors error={formState?.strapiErrors} />
</form>


  

  );
}
