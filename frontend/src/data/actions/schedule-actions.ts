"use server";
import { z } from "zod";
import qs from "qs";
import { revalidatePath } from "next/cache";

import { getUserMeLoader } from "@/data/services/get-user-me-loader";
import { mutateData } from "@/data/services/mutate-data";

export async function addScheduleAction(prevState: any, formData: FormData) {
    const rawFormData = Object.fromEntries(formData);
  
  
    const payload = {
      data: {
        name: rawFormData.name,
        live: rawFormData.live,
        class_time: rawFormData.class_time,
        description: rawFormData.description
        
      },
    };
  
    const responseData = await mutateData(
      "POST",
      `/api/schedule`,
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
  
    revalidatePath("/schedule"); 
  
    return {
      ...prevState,
      message: "schedule Added Successfully",
      data: responseData,
      strapiErrors: null,
    };
  }