// @ts-nocheck
import { EmbedBuilder } from 'discord.js';
import { Client } from "discord.js";

export async function sendTipofDay(client: Client) {
  const Tips = [
    "Every OwO will be a UwU, but not every UwU will be an OwO",
    "TopG = Nigger",
    "d-daddy~",
    "i am inside you~",
    "What are you doing stepbro??",
    "Make me cum mommy",
    "hi baby uwu i laced your drink with cyanide owo 🧡 💙",
    "Pee Pee Poo Poo",
    "Go subscribe to pewdiepie",
    "MR BEAASTT 6000000 OOOO WOOO OHHH",
    "Marino is gay asf ngl",
    "Did you know Max was gay? Me neither",
    "Mr Nick is simping for F1",
    "Marino and Typescript are engaged",
    "I hate black people, wait a minute...",
    "I want to fuck a pillow",
    "UwU my OwO please",
    "Alexander can't pull no bitches, this is exactly why they pull guys",
    "You should go fuck a chicken",
    "Go drink bleach, it's good for you!",
    "This message is just me running out of ideas",
    "owo wh-whats this~ is this yuw b-buwgy wuwgy~",
    "rawr~",
    "im going to muwdew yu~ ~w~",
    "I want to jump off the golden gate bridge",
    "All poo poo times are pee pee times, but not all pee pee times are poo poo times"
  ];
  const randomIndex = Math.floor(Math.random() * Tips.length);
  const general = await client.channels.cache.get("1094948853758840874");
  general?.send({ embeds: [
    new EmbedBuilder()
        .setDescription(`It's time for the phrase of the day from Alexander! What might it be? You'll never know!\n\nNow it's time, drumroll please... 🥁🥁\n\n||${Tips[randomIndex]}||`)
        .setColor("Purple")
  ] })
}
