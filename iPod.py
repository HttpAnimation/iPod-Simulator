import tkinter as tk
from tkinter import filedialog
import os
import random
import pygame

class iPodSimulator:
    def __init__(self, root):
        self.root = root
        self.root.title("iPod Simulator")
        self.root.geometry("400x400")

        self.audio_files = []
        self.current_song_index = 0
        self.shuffled_indexes = []
        self.paused = False

        pygame.init()
        self.clock = pygame.time.Clock()

        self.create_widgets()

    def create_widgets(self):
        self.ipod_frame = tk.Frame(self.root, bg="#000", padx=30, pady=30, borderwidth=0, highlightthickness=0, relief="ridge", bd=10, border=10)
        self.ipod_frame.pack(expand=True, fill="both")

        self.screen_label = tk.Label(self.ipod_frame, text="iPod Simulator", bg="#383838", width=30, height=3, font=("Arial", 14, "bold"), fg="#000")
        self.screen_label.grid(row=0, column=0, columnspan=5, pady=(0, 15))

        self.controls_frame = tk.Frame(self.ipod_frame, bg="#000")
        self.controls_frame.grid(row=1, column=0, columnspan=5)

        self.prev_button = self.create_button(self.controls_frame, "⏪", self.prev_button_click, 0, 0)
        self.play_button = self.create_button(self.controls_frame, "▶️", self.play_button_click, 0, 1)
        self.next_button = self.create_button(self.controls_frame, "⏩", self.next_button_click, 0, 2)
        self.shuffle_button = self.create_button(self.controls_frame, "🔀", self.shuffle_button_click, 0, 3)
        self.add_files_button = self.create_button(self.controls_frame, "➕", self.add_files_button_click, 0, 4)

        self.reset_audio()

    def create_button(self, parent, text, command, row, column):
        button = tk.Button(parent, text=text, width=3, height=1, font=("Arial", 12), command=command)
        button.grid(row=row, column=column, padx=5)
        return button

    def reset_audio(self):
        if self.audio_files:
            self.current_song_index = 0
            pygame.mixer.music.load(self.audio_files[self.current_song_index])
            pygame.mixer.music.play()
            self.update_display()
            self.paused = False  # Ensure auto-play starts playing
        else:
            pygame.mixer.music.stop()
            self.update_display('iPod Simulator')

    def update_display(self, text=''):
        self.screen_label.config(text=text or f"Now Playing: {os.path.basename(self.audio_files[self.current_song_index])}")

    def play_button_click(self):
        if pygame.mixer.music.get_busy():
            if self.paused:
                pygame.mixer.music.unpause()
                self.update_display()
            else:
                pygame.mixer.music.pause()
                self.update_display('Paused')
            self.paused = not self.paused

    def prev_button_click(self):
        if self.current_song_index > 0:
            self.current_song_index -= 1
            pygame.mixer.music.load(self.audio_files[self.current_song_index])
            pygame.mixer.music.play()
            self.update_display()

    def next_button_click(self):
        if self.current_song_index < len(self.audio_files) - 1:
            self.current_song_index += 1
            pygame.mixer.music.load(self.audio_files[self.current_song_index])
            pygame.mixer.music.play()
            self.update_display()

    def shuffle_button_click(self):
        self.shuffle_array(self.shuffled_indexes)
        self.current_song_index = 0
        pygame.mixer.music.load(self.audio_files[self.shuffled_indexes[self.current_song_index]])
        pygame.mixer.music.play()
        self.update_display()

    def add_files_button_click(self, event=None):
        file_paths = filedialog.askopenfilenames(filetypes=[("MP3 files", "*.mp3")])
        if file_paths:
            self.audio_files = list(file_paths)
            self.shuffled_indexes = list(range(len(self.audio_files)))
            self.reset_audio()

    @staticmethod
    def shuffle_array(array):
        random.shuffle(array)

if __name__ == "__main__":
    root = tk.Tk()
    app = iPodSimulator(root)
    root.mainloop()
