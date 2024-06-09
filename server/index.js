const express = require('express');
const connectDB = require('./db');
const Task = require('./models/Task'); 
const cors = require('cors');
const Supplies = require('./models/Supplies');
const Recipe = require ('./models/Recipe');
const bodyParser = require('body-parser')
const app = express();


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

connectDB();


app.post('/favorite-recipe', async (req, res) => {
    const recipeName = NewFavoutite.req.body;

    res.status(200).send('Recipe favorited successfully');
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

app.post('/sign', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await itemModel.findOne({ email });
        if (user) {
            if (user.password === password) {
                res.json('success');
            } else {
                res.json('failed');
            }
        } else {
            const newUser = new itemModel({ email, password });
            await newUser.save();
            res.json('user created');
        }
    } catch (error) {
        res.status(400).json({ message: 'Bad request' });
    }
});

app.listen(4000, () => {
    console.log('App is running on port 4000');
});
