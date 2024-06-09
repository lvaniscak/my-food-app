const express = require('express');
const connectDB = require('./db');
const Task = require('./models/Task'); 
const cors = require('cors');
const Supplies = require('./models/Supplies');
const Recipe = require ('./models/Recipe');
const bodyParser = require('body-parser');
const app = express();
const Register = require('./models/SignUp');
const bcrypt = require('bcrypt');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

connectDB();

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Register.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.hashedPassword);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Incorrect password" });
        }

        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error('Error processing login request:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.post('/sign', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        let user = await Register.findOne({ email });
        if (user) {
            return res.status(409).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10); 
        user = new Register({ name, email, password: hashedPassword });
        await user.save();

        return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error processing registration request:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/recipes', async (req, res) => {
    try {
        const searchRecipes = await Recipe.find({});
        res.json(searchRecipes);
        console.log(searchRecipes)
    } catch (error) {
        console.error('Error fetching searchRecipes:', error);
        res.status(400).json({ message: 'Bad request' });
    }
});

app.post('/recipes', async (req, res) => {
    try {
        const newRecipe = new Recipe(req.body);
        await newRecipe.save();
        res.json(newRecipe);
    } catch (error) {
        console.error('Error adding recipe:', error);
        res.status(4000).json({ message: 'Bad request' });
    }
});

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(400).json({ message: 'Bad request' });
    }
});

app.post('/tasks', async (req, res) => {
    try {
        const newTask = new Task(req.body);
        await newTask.save();
        res.json(newTask);
    } catch (error) {
        console.error('Error adding task:', error);
        res.status(400).json({ message: 'Bad request' });
    }
});

app.delete('/tasks/:text', async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ text: req.params.text });
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json(task);
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(400).json({ message: 'Bad request' });
    }
});
app.get('/stores', async (req, res) => {
    try {
        const supplies = await Supplies.find();
        res.json(supplies);
    } catch (error) {
        console.error('Error fetching supply:', error);
        res.status(400).json({ message: 'Bad request' });
    }
});

app.post('/stores', async (req, res) => {
    try {
        const newSupplies = new Supplies(req.body);
        await newSupplies.save();
        res.json(newSupplies);
    } catch (error) {
        console.error('Error adding supplies:', error);
        res.status(400).json({ message: 'Bad request' });
    }
});
app.delete('/store/:name', async (req, res) => {
    try {
        const supplies = await Supplies.findOneAndDelete({ text: req.params.text });
        if (!supplies) {
            return res.status(404).json({ message: "supplies not found" });
        }
        res.json(supplies);
    } catch (error) {
        console.error('Error deleting supplies:', error);
        res.status(400).json({ message: 'Bad request' });
    }
});


app.listen(4000, () => {
    console.log('App is running on port 4000');
});
