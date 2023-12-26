// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { ipcRenderer } from "electron";


window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("minimize-button").addEventListener('click', () => {
        ipcRenderer.send('minimize-window');
    });
    
    document.getElementById("close-button").addEventListener('click', () => {
        ipcRenderer.send('close-window');
    });
})