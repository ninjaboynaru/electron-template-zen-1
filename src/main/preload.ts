import { contextBridge, ipcRenderer } from 'electron'

import { Message } from '@/types/message'

/**
 * ipcRenderer.invoke - Send a message to the main process via an IPC channel and expect an async result.
 * ipcRender.sendSync - Send a message to the main process via an IPC channel and expect a sync result.
 * ipcRender.send - Send a message async without expecting a response.
 * 
 * You can only send serializable data over IPC channels. This means you can't send functions, Maps, Sets, Symbols, etc.
*/

export const ipc =  {
	action: {
		async: (arg: Message) => ipcRenderer.invoke('ipc:action:async', arg)
	}

}

contextBridge.exposeInMainWorld('ipc', ipc)