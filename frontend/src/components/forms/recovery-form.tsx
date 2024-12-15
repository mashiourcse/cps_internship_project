"use client";

import Link from "next/link";
import { useActionState } from "react";
import { loginUserAction, passwordRecoveryAction } from "@/data/actions/auth-actions";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ZodErrors } from "@/components/custom/zod-errors";
import { StrapiErrors } from "@/components/custom/strapi-errors";
import { SubmitButton } from "@/components/custom/submit-button";

const INITIAL_STATE = {
  zodErrors: null,
  strapiErrors: null,
  data: null,
  message: null,
};

export function RecoveryForm() {
  const [formState, formAction] = useActionState(passwordRecoveryAction, INITIAL_STATE);
  return (
    <div className="w-full max-w-md">
      <form action={formAction}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold"></CardTitle>
            <CardDescription>
              Enter email address to send an recovery email
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              {/* <Label htmlFor="email">Email</Label> */}
              <Input
                id="identifier"
                name="identifier"
                type="text"
                placeholder="email"
              />
              <ZodErrors error={formState?.zodErrors?.identifier} />
            </div>
            
          </CardContent>
          <CardFooter className="flex flex-col">
            <SubmitButton
              className="w-full"
              text="Send"
              loadingText="Loading"
            />
            <StrapiErrors error={formState?.strapiErrors} />
          </CardFooter>
        </Card>
        
      </form>
    </div>
  );
}