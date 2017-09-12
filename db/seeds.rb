# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).


# Label Creation
2.times do |x|
  Label.create({
    name: "Label #{x}"
  })
end

label_one = Label.first
label_two = Label.second


# Artist Creation
2.times do |x|
  Artist.create({
    name: "Artist #{x}"
  })
end

artist_one = Artist.first
artist_two = Artist.second

20.times do |x|
  @album = Album.create!(
    title: "album #{x}",
    subtitle: "subtitle #{x}",
    description: "description #{x}",
    subdescription: "subdescription #{x}",
    release_date: Date.today,
    label_id: x.even? ? label_one.id : label_two.id,
    artist_id: x.even? ? artist_one.id : artist_two.id,
    available: true
  )


  10.times do |y|
    @album.tracks.create!(
      title: "Album #{x} Track #{y}",
    )
  end

end
