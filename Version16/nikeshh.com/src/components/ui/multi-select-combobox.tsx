'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandItem,
  CommandEmpty,
  CommandGroup,
  CommandInput,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface MultiSelectComboboxInterface {
  value?: string[]
  onChange: (value: string[]) => void
  options: {
    value: string
    label: string
  }[]
}

const MultiSelectCombobox = React.forwardRef<HTMLButtonElement, MultiSelectComboboxInterface>(
  ({ options, onChange, value = [] }, ref) => {
    const [open, setOpen] = React.useState(false)

    const handleSelect = (selectedValue: string) => {
      let newValue
      if (value.includes(selectedValue)) {
        newValue = value.filter(v => v !== selectedValue)
      } else {
        newValue = [...value, selectedValue]
      }
      onChange(newValue)
    }

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="justify-between w-full"
          >
            {value.length > 0
              ? value.map(val => options.find(option => option.value === val)?.label).join(', ')
              : 'Select options...'}
            <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search options..." />
            <CommandEmpty>No options found.</CommandEmpty>
            <CommandGroup>
              {options.map(option => (
                <CommandItem
                  key={option.value}
                  onSelect={() => {
                    handleSelect(option.value)
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value.includes(option.value) ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    )
  },
)

MultiSelectCombobox.displayName = 'MultiSelectCombobox'

export { MultiSelectCombobox }
