import User from '../models/User.js';
import jwt from 'jsonwebtoken';

class UserController {
  async signup(req, res) {
    try {
      const { username, email, password } = req.body;
      const existingUser = await User.findOne({ $or: [{ email }, { username }] });
      if (existingUser) return res.status(400).json({ message: 'User already exists' });

      const user = new User({ username, email, password });
      await user.save();

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
      res.status(201).json({ token, user: { id: user._id, username, email } });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
      res.json({ token, user: { id: user._id, username: user.username, email } });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default new UserController();
