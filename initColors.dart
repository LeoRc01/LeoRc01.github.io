import 'package:flutter/material.dart';

class InitColors {
  static Color getColor(colorName) {
    switch (colorName) {
      case "blue":
        return Colors.blue;
        break;
      case "purple":
        return Colors.purple;
        break;
      case "black":
        return Colors.black;
        break;
      case "red":
        return Colors.red;
        break;
      case "green":
        return Colors.green;
        break;
      case "yellow":
        return Colors.yellow;
        break;
      case "brown":
        return Colors.brown;
        break;
      case "pink":
        return Colors.pink;
        break;
      case "white":
        return Colors.white;
        break;
      default:
        return Colors.black;
    }
  }

  static Color getAccentColor(colorName) {
    switch (colorName) {
      case "blue":
        return Colors.blueAccent.shade400;
        break;
      case "purple":
        return Colors.purpleAccent.shade400;
        break;
      case "black":
        return Colors.black;
        break;
      case "red":
        return Colors.redAccent.shade400;
        break;
      case "green":
        return Colors.greenAccent.shade400;
        break;
      case "yellow":
        return Colors.yellowAccent.shade400;
        break;
      case "brown":
        return Colors.brown.shade400;
        break;
      case "pink":
        return Colors.pinkAccent.shade400;
        break;
      case "white":
        return Colors.white;
        break;
      default:
        return Colors.black;
    }
  }
}
