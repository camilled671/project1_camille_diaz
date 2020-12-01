while (true) {
    console.log("Current Room Temperature: " + input.temperature(TemperatureUnit.Fahrenheit) + "°F" + " - " + input.temperature(TemperatureUnit.Celsius) + "°C")
    if (input.temperature(TemperatureUnit.Fahrenheit) >= 130) {
        light.setAll(light.rgb(255, 0, 0))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) < 120) {
        light.setAll(light.rgb(0, 255, 0))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) < 130 && 130 > 80) {
        light.setAll(light.rgb(255, 0, 255))
    }
    
}
