(ns spotify-client-playground.server.models.session
  (:require [kinematic.session :refer [session-accessor]]))

(session-accessor :user-id)
