'use client';

import { Button } from '@/components/ui/button';
import { DialogHeader } from '@/components/ui/dialog';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@radix-ui/react-dialog';

function ContactForm({
  open,
  onOpenChange,
  api,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  api: string;
}) {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          emailSubject: subject,
          sender: email,
          content: message,
        }),
      });

      if (response.ok) {
        setName('');
        setSubject('');
        setEmail('');
        setMessage('');
        setLoading(false);
        onOpenChange(false);
        setNotification(true);
        setTimeout(() => {
          setNotification(false);
        }, 7000);
      } else {
        setLoading(false);
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setLoading(false);
      console.error('Error sending message:', error);
    }
  };

  const pathName = usePathname();

  return (
    <>
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full flex justify-center right-0.5 top-20 z-50"
          >
            <Alert className="w-fit h-fit bg-green-800 border-white/20">
              <AlertDescription className="text-white/80 font-semibold flex items-center gap-2">
                <FaRegCircleCheck />
                Message sent successfully!
              </AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>
      <Dialog open={open} onOpenChange={onOpenChange}>
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
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="w-full p-2 border border-neutral-400 rounded"
                  placeholder="Subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <input
                  className="w-full p-2 border border-neutral-400 rounded"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  className="w-full size-40 resize-none p-2 border border-neutral-400 rounded"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button
                  onClick={handleSubmit}
                  disabled={loading || !name || !subject || !email || !message}
                  type="submit"
                  className={`${pathName.includes('marcus') ? 'bg-[#22c55e]/70 hover:bg-[#22c55e]' : 'bg-violet-500/50 hover:bg-violet-500/80'} mt-4 cursor-pointer`}
                >
                  {loading ? 'Sending...' : 'Send'}
                </Button>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ContactForm;
