interface Contact {
    name: string,
    email: string
}

interface Company {
    id: number,
    name: string,
    website: string,
    logo: string,
    contacts: Array<Contact>
}

export type { Company, Contact };
