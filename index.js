const Discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();


const client = new Discord.Client({ intents: 513 });

client.once('ready', () => {
    console.log("okokok");
    
})

client.on("messageCreate", message => {
    if (message.content === "!*startBT"){
        const row1 = new Discord.MessageActionRow()
            .addComponents(

                new Discord.MessageButton()
                .setCustomId("btnFilm")
                .setLabel("Films")
                .setStyle("SECONDARY")
                .setEmoji("🎬"), 
                new Discord.MessageButton()
                .setCustomId("btnSerie")
                .setLabel("Séries")
                .setStyle("SECONDARY")
                .setEmoji("📺"),
                new Discord.MessageButton()
                .setCustomId("btnAnime")
                .setLabel("Animes")
                .setStyle("SECONDARY")
                .setEmoji("🍣"),
                new Discord.MessageButton()
                .setCustomId("btnLogiciel")
                .setLabel("Logiciels")
                .setStyle("SECONDARY")
                .setEmoji("💻")
                    
        )

        const row2 = new Discord.MessageActionRow()
            .addComponents(

                new Discord.MessageButton()
                .setCustomId("btnEmission")
                .setLabel("Emissions")
                .setStyle("SECONDARY")
                .setEmoji("📹"),        
                new Discord.MessageButton()
                .setCustomId("btnJeux")
                .setLabel("Jeux")
                .setStyle("SECONDARY")
                .setEmoji("🎮"),
                new Discord.MessageButton()
                .setCustomId("btnMusique")
                .setLabel("Musiques")
                .setStyle("SECONDARY")
                .setEmoji("🎵"),
                new Discord.MessageButton()
                .setCustomId("btnEbook")
                .setLabel("Ebooks")
                .setStyle("SECONDARY")
                .setEmoji("📖"),
        
        )

        const row3 = new Discord.MessageActionRow()
                .addComponents(
                
                new Discord.MessageButton()
                .setCustomId("btnTechnique")
                .setLabel("Techniques")
                .setStyle("SECONDARY")
                .setEmoji("⚙️"), 
                new Discord.MessageButton()
                .setCustomId("btnFormation")
                .setLabel("Formations")
                .setStyle("SECONDARY")
                .setEmoji("🧑‍🎓"),
                new Discord.MessageButton()
                .setCustomId("btnEvenement")
                .setLabel("Evènements")
                .setStyle("SECONDARY")
                .setEmoji("❗"),
                new Discord.MessageButton()
                .setCustomId("btnDemande")
                .setLabel("Demandes")
                .setStyle("SECONDARY")
                .setEmoji("❓")

        )

        message.channel.send({content: "Choisissez les catégories que vous voulez voir sur le serveur ! \nCliquez sur un bouton pour vous octroyer un rôle spécifique. \nVous pouvez ré-appuyer sur le même bouton pour que ce rôle soit supprimé.", components: [row1, row2, row3]})
    }
})

client.on("interactionCreate", async interaction =>{

    if(interaction.isButton()){
  
        let role;
        
        const member = await interaction.guild.members.fetch(interaction.user.id)
        let revoke = false;
        switch(interaction.customId){

            case "btnFilm":

                role = interaction.guild.roles.cache.find(role => role.name === "Films (cat)");
                
                if (member.roles.cache.find(r => r.name === role.name)){
                    member.roles.remove(role);
                    revoke = true;
                }else{
                    member.roles.add(role);
                }
                break;

            case "btnSerie":

                role = interaction.guild.roles.cache.find(role => role.name === "Séries (cat)");
                
                if (member.roles.cache.find(r => r.name === role.name)){
                    member.roles.remove(role);
                    revoke = true;
                }else{
                    member.roles.add(role);
                }
                break;

            case "btnAnime":

                role = interaction.guild.roles.cache.find(role => role.name === "Animes (cat)");
                
                if (member.roles.cache.find(r => r.name === role.name)){
                    member.roles.remove(role);
                    revoke = true;
                }else{
                    member.roles.add(role);
                }
                break;

            case "btnLogiciel":

                role = interaction.guild.roles.cache.find(role => role.name === "Logiciels (cat)");
                
                if (member.roles.cache.find(r => r.name === role.name)){
                    member.roles.remove(role);
                    revoke = true;
                }else{
                    member.roles.add(role);
                }
                break;

            case "btnEmission":

            role = interaction.guild.roles.cache.find(role => role.name === "Emissions (cat)");
            
            if (member.roles.cache.find(r => r.name === role.name)){
                member.roles.remove(role);
                revoke = true;
            }else{
                member.roles.add(role);
            }
            break;

            case "btnJeux":

                role = interaction.guild.roles.cache.find(role => role.name === "Jeux (cat)");
                
                if (member.roles.cache.find(r => r.name === role.name)){
                    member.roles.remove(role);
                    revoke = true;
                }else{
                    member.roles.add(role);
                }
                break;

            case "btnMusique":

                role = interaction.guild.roles.cache.find(role => role.name === "Musiques (cat)");
                
                if (member.roles.cache.find(r => r.name === role.name)){
                    member.roles.remove(role);
                    revoke = true;
                }else{
                    member.roles.add(role);
                }
                break;
            
            case "btnEbook":

                role = interaction.guild.roles.cache.find(role => role.name === "eBooks (cat)");
                
                if (member.roles.cache.find(r => r.name === role.name)){
                    member.roles.remove(role);
                    revoke = true;
                }else{
                    member.roles.add(role);
                }
                break;
            
            case "btnTechnique":

                role = interaction.guild.roles.cache.find(role => role.name === "Techniques (cat)");
                
                if (member.roles.cache.find(r => r.name === role.name)){
                    member.roles.remove(role);
                    revoke = true;
                }else{
                    member.roles.add(role);
                }
                break;

            case "btnFormation":

                role = interaction.guild.roles.cache.find(role => role.name === "Formations (cat)");
                
                if (member.roles.cache.find(r => r.name === role.name)){
                    member.roles.remove(role);
                    revoke = true;
                }else{
                    member.roles.add(role);
                }
                break;
            
            case "btnEvenement":

                role = interaction.guild.roles.cache.find(role => role.name === "Evenements (cat)");
                
                if (member.roles.cache.find(r => r.name === role.name)){
                    member.roles.remove(role);
                    revoke = true;
                }else{
                    member.roles.add(role);
                }
                break;

            case "btnDemande":

                role = interaction.guild.roles.cache.find(role => role.name === "Demandes (cat)");
                
                if (member.roles.cache.find(r => r.name === role.name)){
                    member.roles.remove(role);
                    revoke = true;
                }else{
                    member.roles.add(role);
                }
                break;
        }

        if(revoke){
            await interaction.reply({
                content: "Vous avez quitté le salon " + role.name + ", "+ member.user.username,
                ephemeral: true,
            })
        }else{
            await interaction.reply({
                content: "Bienvenue sur le salon " + role.name + ", "+ member.user.username,
                ephemeral: true,
            })
        }
        
    }
})




client.login(process.env.BOT_TOKEN);