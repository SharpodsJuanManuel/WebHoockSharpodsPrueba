const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const UsedEmail = require("./models/NewUserDiamond"); // Importa el modelo
const UsedEmailCentauri = require("./models/NewUserCentauri"); // Importa el modelo
const UsedEmailCarbon = require("./models/NewUserCarbon"); // Importa el modelo
const UsedEmailGriko = require('./models/NewUserGriko')
const UsedEmailAntares = require("./models/NewUserAntares");

const app = express();
const port = process.env.PORT || 5000; // Asegúrate de que 'PORT' esté en mayúsculas

// Configura el body-parser para manejar solicitudes JSON
app.use(bodyParser.json());

// Conecta a MongoDB
mongoose.connect("mongodb+srv://JuanManuel:SharpodsDataBase123.@cluster0.6ys5t.mongodb.net/");

mongoose.connection.on("connected", () => {
    console.log("Conectado a MongoDB");
});

mongoose.connection.on("error", (err) => {
    console.log("Error conectando a MongoDB:", err);
});

// Ruta para el webhook de Carbon usuario nuevo
app.post("/webhookCarbon", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        await UsedEmailCarbon.findOneAndUpdate(
            { email },
            { email, isActive: true },
            { upsert: true, new: true }
        );
        console.log(`Email ${email} ha sido insertado/actualizado.`);
        res.status(200).send("Email guardado exitosamente");
    } catch (error) {
        console.error(`Error guardando el email ${email}:`, error);
        res.status(500).send("Error guardando el email");
    }
});

// Ruta para el webhook de carbon usuario reactivado
app.post("/updateEmailCarbon", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        const updatedEmail = await UsedEmailCarbon.findOneAndUpdate(
            { email },
            { isActive: true },
            { new: true }
        );

        if (updatedEmail) {
            console.log(`Email ${email} ha sido actualizado.`);
            res.status(200).send("Email actualizado exitosamente");
        } else {
            console.log(`Email ${email} no encontrado.`);
            res.status(404).send("Email no encontrado");
        }
    } catch (error) {
        console.error(`Error actualizando el email ${email}:`, error);
        res.status(500).send("Error actualizando el email");
    }
});

// Ruta para el webhook de diamond usuario desactivado
app.post("/desactivateEmailCarbon", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        const updatedEmail = await UsedEmailCarbon.findOneAndUpdate(
            { email },
            { isActive: false },
            { new: true }
        );

        if (updatedEmail) {
            console.log(`Email ${email} ha sido desactivado.`);
            res.status(200).send("Email desactivado exitosamente");
        } else {
            console.log(`Email ${email} no encontrado.`);
            res.status(404).send("Email no encontrado");
        }
    } catch (error) {
        console.error(`Error desactivando el email ${email}:`, error);
        res.status(500).send("Error desactivando el email");
    }
});

// Ruta para el webhook de Antares usuario nuevo
app.post("/webhookAntares", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        await UsedEmailAntares.findOneAndUpdate(
            { email },
            { email, isActive: true },
            { upsert: true, new: true }
        );
        console.log(`Email ${email} ha sido insertado/actualizado.`);
        res.status(200).send("Email guardado exitosamente");
    } catch (error) {
        console.error(`Error guardando el email ${email}:`, error);
        res.status(500).send("Error guardando el email");
    }
});

app.post("desactivateEmailAntares", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        const updatedEmail = await UsedEmailAntares.findOneAndUpdate(
            { email },
            { isActive: false },
            { new: true }
        );

        if (updatedEmail) {
            console.log(`Email ${email} ha sido desactivado.`);
            res.status(200).send("Email desactivado exitosamente");
        } else {
            console.log(`Email ${email} no encontrado.`);
            res.status(404).send("Email no encontrado");
        }
    } catch (error) {
        console.error(`Error desactivando el email ${email}:`, error);
        res.status(500).send("Error desactivando el email");
    }
})

app.post("/updateEmailAntares", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        const updatedEmail = await UsedEmailAntares.findOneAndUpdate(
            { email },
            { isActive: true },
            { new: true }
        );

        if (updatedEmail) {
            console.log(`Email ${email} ha sido actualizado.`);
            res.status(200).send("Email actualizado exitosamente");
        } else {
            console.log(`Email ${email} no encontrado.`);
            res.status(404).send("Email no encontrado");
        }
    } catch (error) {
        console.error(`Error actualizando el email ${email}:`, error);
        res.status(500).send("Error actualizando el email");
    }
});

// Ruta para el webhook de Griko usuario nuevo
app.post("/webhookGriko", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        await UsedEmailGriko.findOneAndUpdate(
            { email },
            { email, isActive: true },
            { upsert: true, new: true }
        );
        console.log(`Email ${email} ha sido insertado/actualizado.`);
        res.status(200).send("Email guardado exitosamente");
    } catch (error) {
        console.error(`Error guardando el email ${email}:`, error);
        res.status(500).send("Error guardando el email");
    }
});

// Ruta para el webhook de Griko usuario desactivado
app.post("/desactivateEmailGriko", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        const updatedEmail = await UsedEmailGriko.findOneAndUpdate(
            { email },
            { isActive: false },
            { new: true }
        );

        if (updatedEmail) {
            console.log(`Email ${email} ha sido desactivado.`);
            res.status(200).send("Email desactivado exitosamente");
        } else {
            console.log(`Email ${email} no encontrado.`);
            res.status(404).send("Email no encontrado");
        }
    } catch (error) {
        console.error(`Error desactivando el email ${email}:`, error);
        res.status(500).send("Error desactivando el email");
    }
});

// Ruta para el webhook de Griko usuario reactivado

app.post("/updateEmailGriko", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        const updatedEmail = await UsedEmailGriko.findOneAndUpdate(
            { email },
            { isActive: true },
            { new: true }
        );

        if (updatedEmail) {
            console.log(`Email ${email} ha sido actualizado.`);
            res.status(200).send("Email actualizado exitosamente");
        } else {
            console.log(`Email ${email} no encontrado.`);
            res.status(404).send("Email no encontrado");
        }
    } catch (error) {
        console.error(`Error actualizando el email ${email}:`, error);
        res.status(500).send("Error actualizando el email");
    }
});

// Ruta para el webhook de Centauri usuario nuevo
app.post("/webhookCentauri", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        await UsedEmailCentauri.findOneAndUpdate(
            { email },
            { email, isActive: true },
            { upsert: true, new: true }
        );
        console.log(`Email ${email} ha sido insertado/actualizado.`);
        res.status(200).send("Email guardado exitosamente");
    } catch (error) {
        console.error(`Error guardando el email ${email}:`, error);
        res.status(500).send("Error guardando el email");
    }
});

// Ruta para el webhook de Centauri usuario desactivado
app.post("/desactivateEmailCentauri", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        const updatedEmail = await UsedEmailCentauri.findOneAndUpdate(
            { email },
            { isActive: false },
            { new: true }
        );

        if (updatedEmail) {
            console.log(`Email ${email} ha sido desactivado.`);
            res.status(200).send("Email desactivado exitosamente");
        } else {
            console.log(`Email ${email} no encontrado.`);
            res.status(404).send("Email no encontrado");
        }
    } catch (error) {
        console.error(`Error desactivando el email ${email}:`, error);
        res.status(500).send("Error desactivando el email");
    }
});

// Ruta para el webhook de Centauri usuario reactivado
app.post("/updateEmailCentauri", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        const updatedEmail = await UsedEmailCentauri.findOneAndUpdate(
            { email },
            { isActive: true },
            { new: true }
        );

        if (updatedEmail) {
            console.log(`Email ${email} ha sido actualizado.`);
            res.status(200).send("Email actualizado exitosamente");
        } else {
            console.log(`Email ${email} no encontrado.`);
            res.status(404).send("Email no encontrado");
        }
    } catch (error) {
        console.error(`Error actualizando el email ${email}:`, error);
        res.status(500).send("Error actualizando el email");
    }
});

// Ruta para el webhook de Diamond usuario nuevo
app.post("/webhookDiamond", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        await UsedEmail.findOneAndUpdate(
            { email },
            { email, isActive: true },
            { upsert: true, new: true }
        );
        console.log(`Email ${email} ha sido insertado/actualizado.`);
        res.status(200).send("Email guardado exitosamente");
    } catch (error) {
        console.error(`Error guardando el email ${email}:`, error);
        res.status(500).send("Error guardando el email");
    }
});

// Ruta para el webhook de Diamond usuario desactivado
app.post("/desactivateEmailDiamond", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        const updatedEmail = await UsedEmail.findOneAndUpdate(
            { email },
            { isActive: false },
            { new: true }
        );

        if (updatedEmail) {
            console.log(`Email ${email} ha sido desactivado.`);
            res.status(200).send("Email desactivado exitosamente");
        } else {
            console.log(`Email ${email} no encontrado.`);
            res.status(404).send("Email no encontrado");
        }
    } catch (error) {
        console.error(`Error desactivando el email ${email}:`, error);
        res.status(500).send("Error desactivando el email");
    }
});

// Ruta para el webhook de Diamond usuario reactivado
app.post("/updateEmailDiamond", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send("Email es requerido");
    }

    try {
        const updatedEmail = await UsedEmail.findOneAndUpdate(
            { email },
            { isActive: true },
            { new: true }
        );

        if (updatedEmail) {
            console.log(`Email ${email} ha sido actualizado.`);
            res.status(200).send("Email actualizado exitosamente");
        } else {
            console.log(`Email ${email} no encontrado.`);
            res.status(404).send("Email no encontrado");
        }
    } catch (error) {
        console.error(`Error actualizando el email ${email}:`, error);
        res.status(500).send("Error actualizando el email");
    }
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});
