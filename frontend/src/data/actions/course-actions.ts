"use server";
import { z } from "zod";
import qs from "qs";
import { revalidatePath } from "next/cache";

import { getUserMeLoader } from "@/data/services/get-user-me-loader";
import { mutateData } from "@/data/services/mutate-data";

export async function addCourseAction(prevState: any, formData: FormData) {
    const rawFormData = Object.fromEntries(formData);
  
  
    const payload = {
      data: {
        name: rawFormData.name,
        duration: rawFormData.duration,
        details: rawFormData.details,
        fee: rawFormData.fee,
        available: rawFormData.available,
        class: rawFormData.class
        // Add other course fields as needed
      },
    };
  
    const responseData = await mutateData(
      "POST",
      `/api/courses`,
      payload,
      
    );
  
    if (!responseData) {
      return {
        ...prevState,
        strapiErrors: null,
        message: "Oops! Something went wrong. Please try again.",
      };
    }
  
    if (responseData.error) {
      return {
        ...prevState,
        strapiErrors: responseData.error,
        message: "Failed to Add Course.",
      };
    }
  
    revalidatePath("/courses"); 
  
    return {
      ...prevState,
      message: "Course Added Successfully",
      data: responseData,
      strapiErrors: null,
    };
  }