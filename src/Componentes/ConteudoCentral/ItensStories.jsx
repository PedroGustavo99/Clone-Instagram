export default function IntensStories(props) {
    return (
        <div className="itemStories">
            <div className="borda">
                <span>{props.fotoStory}</span>
            </div>
            <span>{props.nomeStory}</span>
        </div>
    )
}