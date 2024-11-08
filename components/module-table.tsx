import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import React from 'react'

const USER_ROLES = [
  { key: 'Basic', value: 'BAS' },
  { key: 'Teacher', value: 'TCH' },
  { key: 'Dean, Head, or Officer', value: 'DHO' },
  { key: 'Accounting', value: 'ACCT' },
  { key: 'Cashier', value: 'CHR' },
  { key: 'Student Affairs', value: 'SAO' },
  { key: 'Registrar', value: 'REG' },
  { key: 'System Admin', value: 'SYSAD' },
]

type ModuleTableProps = {
  heading: string
  subModules: {
    title: string
    items: {
      name: string
      users: string[]
    }[]
  }[]
}

const ModuleTable = ({ heading, subModules }: ModuleTableProps) => {
  return (
    <div className="relative space-y-4 py-8">
      <h3 className="">{heading}</h3>
      <div className="relative w-full overflow-hidden rounded-md">
        <Table className="relative w-full border">
          <TableHeader>
            <TableRow className="bg-neutral-200 hover:bg-neutral-200">
              <TableHead className="w-[100px]"></TableHead>
              {USER_ROLES.map((roles) => (
                <TableHead
                  key={roles.value}
                  className="w-[100px] border py-2 text-center text-black"
                >
                  {roles.key}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {subModules.map((module, moduleIndex) => (
              <React.Fragment key={moduleIndex}>
                {/* Module Heading */}
                <TableRow className="bg-neutral-100">
                  <TableCell
                    colSpan={USER_ROLES.length + 1}
                    className="text-left font-semibold"
                  >
                    {module.title}
                  </TableCell>
                </TableRow>

                {/* Module Items */}
                {module.items.map((item, itemIndex) => (
                  <TableRow key={itemIndex}>
                    <TableCell className="border py-2 text-left font-medium">
                      {item.name}
                    </TableCell>
                    {USER_ROLES.map((role) => (
                      <TableCell
                        key={role.value}
                        className={cn(
                          'w-[100px] border py-2 text-center text-black',
                          { 'bg-brand': item.users.includes(role.value) }
                        )}
                      >
                        {item.users.includes(role.value) && (
                          <Check className="m-auto text-white" />
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default ModuleTable
