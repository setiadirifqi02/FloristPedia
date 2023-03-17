import NotFoundComp from "@/components/ui/404-comps";

function NotFoundPage() {
    return (
        <div>
            <NotFoundComp
            desc={'Oops..! The Page You are Looking Can\'t be Found '}
            backlink={'/'} />

        </div>
    )
}

export default NotFoundPage;