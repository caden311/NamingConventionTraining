const isEnabled = itemCount > 3
return <Button disabled={!isEnabled} />

const isDisabled = itemCount <= 3
return <Button disabled={isDisabled} />