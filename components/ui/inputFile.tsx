import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function InputFile() {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">

      <Input type="email" id="email" placeholder="company name" />
    </div>
  )
}
