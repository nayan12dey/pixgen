import Image from "next/image";


const PhotoDetailsPage = async ({ params }) => {

    const { id } = await params;

    const res = await fetch("https://pixgen-self.vercel.app/data.json")
    const photos = await res.json();

    const photo = photos.find(photo => photo.id == id);
    console.log(photo)

    // console.log(id);


    return (
        <div>
            <h1>{photo?.title}</h1>
            <p>{photo.prompt}</p>
            <Image src={photo.imageUrl} width={200} height={200} alt="image"></Image>
        </div>
    );
};

export default PhotoDetailsPage;