import { Icon } from '@iconify/react'

import { Message } from '@/types/message'
import { Button } from '@/render/uikit/Button'
import { toast } from '@/render/hooks/useToast'


export default function Home() {
	const sendIpcMessage = () => {
		const message: Message = {
			id: '1',
			value: 'Hello from the Renderer process'
		}

		window.ipc.action.async(message).then(
			(response: string) => {
				console.log('IPC Message response:', response)
				toast({
					title: 'Success',
					description: 'IPC Message sent and response received',
				})
			},
			() => {
				toast({
					title: 'Error',
					description: 'Error sending IPC Message',
					variant: 'destructive',
				})
			}
		)
	}

	return (
		<section className='h-screen w-screen flex flex-row justify-center items-center'>
			<div>
				<h1 className='text-center text-4xl font-extrabold tracking-tight lg:text-5xl'>Home</h1>
				<Button onClick={sendIpcMessage}>
					<Icon icon='material-symbols:send-outline' className='mr-2' />
					Send IPC Message
				</Button>
			</div>
		</section>
	)
}