const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mongo-exercises');

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  type: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  species: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  height: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50
  },
  weight: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50
  },
  abilities: [String],
  base_stats: {
    hp: {
      type: Number,
      required: true,
      min: 0,
      max: 1000,
      get: v => Math.round(v),
      set: v => Math.round(v),
    },
    attack: {
      type: Number,
      required: true,
      min: 0,
      max: 1000,
      get: v => Math.round(v),
      set: v => Math.round(v),
    },
    defense: {
      type: Number,
      required: true,
      min: 0,
      max: 1000,
      get: v => Math.round(v),
      set: v => Math.round(v),
    },
    sp_Atk: {
      type: Number,
      required: true,
      min: 0,
      max: 1000,
      get: v => Math.round(v),
      set: v => Math.round(v),
    },
    sp_Def: {
      type: Number,
      required: true,
      min: 0,
      max: 1000,
      get: v => Math.round(v),
      set: v => Math.round(v),
    },
    speed: {
      type: Number,
      required: true,
      min: 0,
      max: 1000,
      get: v => Math.round(v),
      set: v => Math.round(v),
    },
  },
});

module.exports = mongoose.model('pokemon', pokemonSchema)