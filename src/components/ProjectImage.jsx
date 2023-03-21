export default function ProjectImage(props) {
    let imgSrc = `https://media.contra.com/image/upload/f_auto,c_limit,w_1496,q_auto/${props.img}`
    return (
        <div class="flex flex-col items-center justify-center">
        <img class="rounded-2xl h-72 w-96 object-cover mb-4" src={imgSrc} alt={props.description}/>
        <h3 class="text-lg font-semibold">{props.description}</h3>
        </div>
    )
}