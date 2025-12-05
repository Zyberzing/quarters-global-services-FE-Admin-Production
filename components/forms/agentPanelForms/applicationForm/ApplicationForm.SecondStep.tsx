'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  secondStepApplicationFormSchema,
  SecondStepApplicationFormSchemaType,
} from './ApplicationForm';
import { FileInput } from '@/components/ui/file-input';

const ApplicationForm_SecondStep = ({ setStep }: { setStep: (v: number) => void }) => {
  const form = useForm<SecondStepApplicationFormSchemaType>({
    resolver: zodResolver(secondStepApplicationFormSchema),
  });

  const onSubmit = (values: SecondStepApplicationFormSchemaType) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Processing Time (radio) */}
        <div className="p-4 border rounded-lg space-y-3">
          <p className="col-span-2 font-semibold">Processing Time</p>
          <FormField
            name="processingTime"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="priority" id="priority" />
                      <label htmlFor="priority">8–10 Processing Day (Priority)</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="mission" id="mission" />
                      <label htmlFor="mission">5–7 Processing Day (Mission Critical)</label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Extra Processing Services (checkboxes) */}
        <div className="p-4 border rounded-lg space-y-3">
          <p className="col-span-2 font-semibold">Processing Time (Extra Services)</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              'Super Urgent Appointment',
              'Embassy Legalization',
              'Global Concierge Service',
              'Photo Printing',
              'Digital Photo Service',
              'Passport Protection Plan',
            ].map((service) => (
              <FormField
                key={service}
                name="services"
                control={form.control}
                render={({ field }) => {
                  const value = field.value || [];
                  return (
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <Checkbox
                          checked={value.includes(service)}
                          onCheckedChange={(checked) => {
                            if (checked) field.onChange([...value, service]);
                            else field.onChange(value.filter((v: string) => v !== service));
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-left leading-normal">{service}</FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
          </div>
        </div>

        {/* Upload Required Document */}
        <div className="p-4 border rounded-lg space-y-4">
          <p className="col-span-2 font-semibold">Upload Required Documents</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              name="passportScan"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Passport Scan</FormLabel>
                  <FormControl>
                    <FileInput onFileChange={console.log} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="serviceForm"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Form</FormLabel>
                  <FormControl>
                    <FileInput onFileChange={console.log} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              name="proofOfAddress"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Proof of Address</FormLabel>
                  <FormControl>
                    <FileInput onFileChange={console.log} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="visaDocument"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Visa Document</FormLabel>
                  <FormControl>
                    <FileInput onFileChange={console.log} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              name="signature"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Signature</FormLabel>
                  <FormControl>
                    <FileInput onFileChange={console.log} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="photograph"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Photograph</FormLabel>
                  <FormControl>
                    <FileInput onFileChange={console.log} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              name="embassyDocument"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Embassy Document</FormLabel>
                  <FormControl>
                    <FileInput onFileChange={console.log} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2">
          <Button type="button" onClick={() => setStep(1)} variant="outline">
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Form>
  );
};

export default ApplicationForm_SecondStep;
