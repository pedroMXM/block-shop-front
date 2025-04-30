
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { categories } from "@/data/categories";
import { Link } from "react-router-dom";
import { HelpCircle } from "lucide-react";

const productSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters long" }),
  description: z.string().min(20, { message: "Description must be at least 20 characters long" }),
  price: z.string().refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
    message: "Price must be a positive number"
  }),
  condition: z.enum(["new", "used"]),
  pricingType: z.enum(["fixed", "auction"]),
  isDigital: z.boolean().default(false),
  isOnsite: z.boolean().default(false),
  category: z.string(),
  region: z.string()
});

type ProductFormValues = z.infer<typeof productSchema>;

const regions = [
  { id: "north-america", name: "North America", subregions: [
    { id: "usa", name: "United States", subregions: [
      { id: "northeast", name: "Northeast" },
      { id: "midwest", name: "Midwest" },
      { id: "south", name: "South" },
      { id: "west", name: "West" }
    ]},
    { id: "canada", name: "Canada" },
    { id: "mexico", name: "Mexico" }
  ]},
  { id: "europe", name: "Europe", subregions: [
    { id: "western-europe", name: "Western Europe" },
    { id: "eastern-europe", name: "Eastern Europe" },
    { id: "northern-europe", name: "Northern Europe" },
    { id: "southern-europe", name: "Southern Europe" }
  ]},
  { id: "asia", name: "Asia", subregions: [
    { id: "east-asia", name: "East Asia" },
    { id: "south-asia", name: "South Asia" },
    { id: "southeast-asia", name: "Southeast Asia" },
    { id: "central-asia", name: "Central Asia" }
  ]},
  { id: "africa", name: "Africa" },
  { id: "oceania", name: "Oceania" },
  { id: "south-america", name: "South America" },
  { id: "antarctica", name: "Antarctica" }
];

const PublishProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      condition: "new",
      pricingType: "fixed",
      isDigital: false,
      isOnsite: false,
      category: "",
      region: ""
    }
  });

  const onSubmit = (data: ProductFormValues) => {
    console.log("Form submitted:", data);
    // Here you would typically handle the form submission
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Publish New Product</h1>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter product title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Enter product description" 
                    className="min-h-[120px]" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input 
                    type="text" 
                    placeholder="0.00" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="condition"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Condition</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="new" id="condition-new" />
                        <Label htmlFor="condition-new">New</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="used" id="condition-used" />
                        <Label htmlFor="condition-used">Used</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pricingType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Pricing Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fixed" id="pricing-fixed" />
                        <Label htmlFor="pricing-fixed">Fixed Price</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="auction" id="pricing-auction" />
                        <Label htmlFor="pricing-auction">Auction</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="isDigital"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Digital Product/Service</FormLabel>
                    <FormDescription>
                      Check this if your product is digital or a service
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isOnsite"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Onsite Service</FormLabel>
                    <FormDescription>
                      Check this if your service requires onsite presence
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select onValueChange={(value) => {
                  field.onChange(value);
                  setSelectedCategory(value);
                }}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="region"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Region</FormLabel>
                <Select onValueChange={(value) => {
                  field.onChange(value);
                  setSelectedRegion(value);
                }}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a region" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {regions.map((region) => (
                      <SelectItem key={region.id} value={region.id}>
                        {region.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <div className="flex items-center space-x-2">
              <Button type="button" variant="outline" disabled>
                Add Category
              </Button>
              <div className="flex items-center">
                <Link to="#" className="text-sm text-blue-600 hover:underline flex items-center">
                  How do I enable this button?
                  <HelpCircle className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button type="button" variant="outline" disabled>
                Add Region
              </Button>
              <div className="flex items-center">
                <Link to="#" className="text-sm text-blue-600 hover:underline flex items-center">
                  How do I enable this button?
                  <HelpCircle className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-6 space-x-4">
            <Button type="submit">Publish Product</Button>
            <Button type="button" variant="outline" onClick={() => form.reset()}>
              Reset
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PublishProduct;
