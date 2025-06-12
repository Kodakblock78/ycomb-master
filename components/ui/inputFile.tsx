import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function InputFile() {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="company">search on company</Label>
      <Input type="email" id="email" placeholder="company name" />
    </div>
  )
}
