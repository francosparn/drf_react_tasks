# :rocket: Task App

Web application of CRUD type tasks.

The backend is an API and is developed in the **Django REST Framework**, while **React** was used for the frontend.

In the application it is possible to create tasks, update them, delete them and it also has paging, so that the performance is the most optimal possible.

For the design and layout of the application, **HTML**, **CSS** and **Bootstrap v5.3** were used.

Icons used are from **[Font Awesome](https://fontawesome.com/)**.

## Preview 

### Home 
![](https://i.imgur.com/zdQ8LFN.png)

![](https://i.imgur.com/BdXgAmi.png)

### Create Task
![](https://i.imgur.com/XOqtfLB.png)

### Update Task
![](https://i.imgur.com/XmHvde8.png)

## Project run

To run this project you will need to have **Python** installed on your computer. The first thing we will do is download the project and open it in our preferred editor. Although not required, it is recommended that you create a **virtual environment** to store your project dependencies separately.

To install a **virtual environment**, run the following command:

```
pip install virtualenv
```

If your operating system is **Windows**, open **"Command Prompt"** and run the following command:

```
source env/Scripts/activate
```

If your operating system is **Linux** or **Mac**, open **"Terminal"** and run:

```
source env/bin/activate
```

Next, install the project dependencies with:

```
pip install -r requirements.txt
```

It is almost ready, now it only remains to execute the project with the following command:

```
python manage.py runserver
```
