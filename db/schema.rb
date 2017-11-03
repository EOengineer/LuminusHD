# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171102225453) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "album_genres", force: :cascade do |t|
    t.integer "album_id"
    t.integer "genre_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["album_id"], name: "index_album_genres_on_album_id"
    t.index ["genre_id"], name: "index_album_genres_on_genre_id"
  end

  create_table "album_tracks", force: :cascade do |t|
    t.integer "album_id"
    t.integer "track_id"
    t.integer "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["album_id"], name: "index_album_tracks_on_album_id"
    t.index ["track_id"], name: "index_album_tracks_on_track_id"
  end

  create_table "albums", force: :cascade do |t|
    t.string "title", null: false
    t.string "subtitle"
    t.string "image_url", null: false
    t.text "description", null: false
    t.text "subdescription"
    t.datetime "release_date"
    t.integer "artist_id", null: false
    t.integer "label_id", null: false
    t.boolean "available", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["label_id"], name: "index_albums_on_label_id"
    t.index ["title", "artist_id"], name: "index_albums_on_title_and_artist_id", unique: true
  end

  create_table "artists", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "genres", force: :cascade do |t|
    t.string "title", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "labels", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tracks", force: :cascade do |t|
    t.string "title", null: false
    t.string "time", null: false
    t.boolean "single", default: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
