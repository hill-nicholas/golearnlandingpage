import React from "react"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function InputOTPWithSeparator() {
  return (
    <div>
        <InputOTP maxLength={5}>
        <InputOTPGroup>
            <InputOTPSlot index={0} />
        </InputOTPGroup>
        <InputOTPGroup>
            <InputOTPSlot index={1} />
        </InputOTPGroup>
        <InputOTPGroup>
            <InputOTPSlot index={2} />
        </InputOTPGroup>
      <InputOTPGroup>
        <InputOTPSlot index={3} />
      </InputOTPGroup>
      <InputOTPGroup>
        <InputOTPSlot index={4} />
      </InputOTPGroup>
    </InputOTP>
    </div>
  )
}
