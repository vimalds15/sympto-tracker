# Sympto Tracker

## Live Demo
Check out the live demo of Sympto Tracker [Preview](https://sympto-tracker.vercel.app/).

Sympto-Tracker is a web application that allows users to track their symptoms and predict the likelihood of developing certain diseases. The application is built using React, Flask, and RStudio, and currently supports the prediction of the following diseases:

- Liver Cirrhosis
- Mesothelioma
- Chronic Kidney Disease
- Coronary Heart Disease
- Diabetes Mellitus

For predicting the disease diagnosis we used Supervised Binary classification Machine Learning models, and used the following algorithms:

- Logistic Regression
- Support Vector Machine
- XGBoost

## Tech Stack

- React: Frontend
- Node.js: Runtime environment
- Flask: Backend web framework
- RStudio: Data analysis IDE





## Installation

To run the application, you will need to have Node.js, Python 3, and R installed on your computer.

1. Clone the repository:

   git clone https://github.com/ak736/sympto-tracker.git

2. Install the dependencies for the frontend and backend:

   cd sympto-tracker/frontend
   npm install

   cd ../backend
   pip install -r requirements.txt

3. Start the frontend and backend servers:

   cd sympto-tracker/frontend
   npm start

   cd ../backend
   python app.py
   
4. Navigate to `http://localhost:3000` in your web browser to use the application.

## Usage

To use Sympto-Tracker, simply enter your symptoms into the form on the home page and click "Predict". The application will use machine learning algorithms to predict the likelihood of developing each of the supported diseases based on your symptoms.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Credits

Sympto-Tracker was developed by:

- [Anto Vimalan](https://github.com/vimalds15)
- [Aniket Kumar](https://github.com/ak736)
- [Prawin RP](https://github.com/PRAWIN392)
- [Harshit V](https://github.com/harshitv804)

If you have any questions or feedback, please reach out to [antovimalands@gmail.com].

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
