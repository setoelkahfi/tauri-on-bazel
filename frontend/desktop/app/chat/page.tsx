'use client'

import { useLocalStorage } from '../_lib/hooks/use-local-storage';
import { cn } from '../_lib/utils';
import { ChatPanel } from '../_ui/components/chat-panel';
import { EmptyScreen } from '../_ui/components/empty-screen';
import { useChat, type Message } from 'ai/react'
import { usePathname } from 'next/navigation';
import { toast } from 'react-hot-toast'

export interface ChatProps extends React.ComponentProps<'div'> {
  initialMessages?: Message[]
  id?: string
}

export default function Page({id, initialMessages, className}: ChatProps) {
  const path = usePathname()
  const [previewToken, setPreviewToken] = useLocalStorage<string | null>(
    'ai-token',
    null
  )
  const { messages, append, reload, stop, isLoading, input, setInput } =
  useChat({
    initialMessages,
    id,
    body: {
      id,
      previewToken
    },
    onResponse(response) {
      if (response.status === 401) {
        toast.error(response.statusText)
      }
    },
    onFinish() {
      if (!path.includes('chat')) {
        window.history.pushState({}, '', `/chat/${id}`)
      }
    }
  })

  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className={cn('pb-[200px] pt-4 md:pt-10', className)}>
          {messages.length ? (
            <>
            </>
          ) : (
            <EmptyScreen setInput={setInput} />
          )}
        </div>

      </div>
    </div>
  );
}
