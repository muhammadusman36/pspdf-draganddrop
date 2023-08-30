import { useEffect, useRef, useState } from "react";

export default function PdfViewerComponent(props) {
    const containerRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageDragStart = (event, imageUrl) => {
        event.preventDefault();
        event.dataTransfer.setData('text/plain', imageUrl);
    };

    const handleImageDragOver = (event) => {
        event.preventDefault();
    };

    const handleImageDrop = (event) => {
        event.preventDefault();
        const imageUrl = event.dataTransfer.getData('text/plain');
        setSelectedImage(imageUrl);
    };

    useEffect(() => {
        const container = containerRef.current;

        let PSPDFKit, instance;

        (async function () {
            PSPDFKit = await import("pspdfkit")

            PSPDFKit.unload(container);

            return await PSPDFKit.load({
                container,
                document: props.document,
                baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`
            }).then(async (instance) => {
                console.log("PSPDFKit for Web successfully loaded!!", instance);

                const annotations = await instance.getAnnotations(0);

                if (
                    !annotations.find(
                        (annotation) =>
                            annotation.customData && annotation.customData.progrmmatic
                    )
                ) {
                    const blob = await fetch(
                        selectedImage
                    ).then((res) => res.blob());
                    const imageAttachmentId = await instance.createAttachment(blob);
                    const imageSignature = new PSPDFKit.Annotations.ImageAnnotation({
                        boundingBox: new PSPDFKit.Geometry.Rect({
                            width: 300,
                            height: 166,
                            top: 562,
                            left: 140,
                        }),
                        imageAttachmentId,
                        isSignature: true,
                        pageIndex: 0,
                        contentType: "image/png",
                        description: "John Appleseed",
                        customData: {
                            progrmmatic: true,
                        },
                    });

                    instance.create(imageSignature);
                }

                return instance;
            });
        })();

        return () => PSPDFKit && PSPDFKit.unload(container);
    }, []);

    return (
        <div>
            <div className="images">
                <img
                    draggable="true"
                    src="https://source.unsplash.com/6w3hF2r9gqk/300x200"
                    onDragStart={(event) => handleImageDragStart(event, 'https://source.unsplash.com/6w3hF2r9gqk/300x200')}
                    onDragOver={handleImageDragOver}
                    onDrop={handleImageDrop}
                />
                <img
                    draggable="true"
                    src="https://source.unsplash.com/7S9k69vO8ZY/300x200"
                    onDragStart={(event) => handleImageDragStart(event, 'https://source.unsplash.com/7S9k69vO8ZY/300x200')}
                    onDragOver={handleImageDragOver}
                    onDrop={handleImageDrop}
                />
                <img
                    draggable="true"
                    src="https://source.unsplash.com/kYIrsmX3YIA/300x200"
                    onDragStart={(event) => handleImageDragStart(event, 'https://source.unsplash.com/kYIrsmX3YIA/300x200')}
                    onDragOver={handleImageDragOver}
                    onDrop={handleImageDrop}
                />
            </div>
            <div
                ref={containerRef}
                style={{
                    height: "calc(100vh - 165px)",
                    backgroundColor: "#4d525d",
                }}
            />
            <style global jsx>
                {`
                * {
                    margin: 0;
                    padding: 0;
                }

                .drag-over {
                    pointer-events: none;
                }
                `}
            </style>
            <style jsx>{`
                .images {
                    padding: 15px;
                    background-color: #f5f5f5;
                    border-bottom: 1px solid #444;
                    display: flex;
                    flex-direction: row;
                    gap: 15px;
                }

                .images img {
                    width: 200px;
                    border-radius: 4px;
                    cursor: move;
                    box-shadow: 0px 1px 1px 1px #6868682e;
                }
                `}
            </style>
        </div>
    );
}
