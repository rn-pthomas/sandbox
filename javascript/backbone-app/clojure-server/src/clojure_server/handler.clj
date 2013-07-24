(ns clojure-server.handler
  (:use compojure.core)
  (:require [clojure.java.jdbc :as sql]
            [clojure.repl :as repl]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [clojure-server.controllers.books :as books]
            [clojure.data.json :as json]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; API spec                                                                                   ;;
;; url             HTTP Method  Operation                                                     ;;
;; /api/books      GET          Get an array of all books                                     ;;
;; /api/books/:id  GET          Get the book with id of :id                                   ;;
;; /api/books      POST         Add a new book and return the book with an id attribute added ;;
;; /api/books/:id  PUT          Update the book with id of :id                                ;;
;; /api/books/:id  DELETE       Delete the book with id of :id                                ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defroutes app-routes
  (context "/books" []
           (defroutes books-routes
             (GET "/" [] (json/json-str (books/get-all)))
             (POST "/" [] (json/json-str (books/post-without-id)))
             (context "/:id" [id]
                      (defroutes book-routes
                        (GET "/" [] (json/json-str (books/get-by-id id)))))))
  (route/resources "/")
  (route/not-found "<h1>Error: Page not found.</h1>"))

(def app
  (handler/api app-routes))
