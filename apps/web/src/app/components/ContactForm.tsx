'use client';

import { Button } from '@/components/ui/button';
import { DialogHeader } from '@/components/ui/dialog';
import { usePathname } from 'next/navigation';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@radix-ui/react-dialog';

function ContactForm({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="fixed inset-0 flex items-center justify-center bg-black/50">
        <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg w-sm text-white/80">
          <DialogHeader>
            <div className="flex justify-between">
              <DialogTitle className="text-xl">Contact Me</DialogTitle>
              <DialogClose className="text-xl mr-3 text-white/50 font-normal hover:text-white cursor-pointer">
                x
              </DialogClose>
            </div>
            <DialogDescription className="my-3">
              Fill out the form below to get in touch.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <form className="w-full m-1 flex flex-col space-y-5">
              <input
                className="w-full p-2 border border-neutral-400 rounded"
                placeholder="Name"
              />
              <input
                className="w-full p-2 border border-neutral-400 rounded"
                placeholder="Subject"
              />
              <input
                className="w-full p-2 border border-neutral-400 rounded"
                placeholder="Email"
                type="email"
              />
              <textarea
                className="w-full size-40 resize-none p-2 border border-neutral-400 rounded"
                placeholder="Message"
              />
              <Button
                type="submit"
                className={`${pathName.includes('marcus') ? 'bg-[#22c55e]/70 hover:bg-[#22c55e]' : 'bg-blue-500/50 hover:bg-blue-500/80'} mt-4 cursor-pointer`}
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ContactForm;
